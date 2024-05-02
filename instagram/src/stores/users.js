import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase';
export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMess = ref("");
  const loading = ref(false)
  const loadingUser = ref(false)
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  /// login
  const handleLogin = async (credentials) => {
    const { email, password } = credentials
    if (!validateEmail(email)) {
      return errorMess.value = "Email is invalid"
    }
    if (!password.length) {
      return errorMess.value = "Password cannot be empty"
    }
    loading.value = true;
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      loading.value = false;
      return errorMess.value = error.message
    }
    const { data: existsUser } = await supabase.from("users")
      .select()
      .eq('username', username)
      .single()
    user.value = {
      email: existsUser.email,
      username: existsUser.username,
      id: existsUser.id
    }
    loading.value = false;
    errorMess.value = ""
  }
  /////// signup
  const handleSignup = async (credentials) => {
    const { email, password, username } = credentials
    if (password.length < 6) {
      console.log("too short");
      return errorMess.value = "Password length is too short"
    }
    if (username.length < 3) {
      console.log("too short");

      return errorMess.value = "Username length is too short"
    }
    if (!validateEmail(email)) {
      return errorMess.value = "Email is invalid"
    }
    //loading
    loading.value = true
    //check 
    const { data: userExistwithUsername } = await supabase.from("users")
      .select()
      .eq('username', username)
      .single()
    if (userExistwithUsername) {
      return errorMess.value = "User already registered !"
    }
    errorMess.value = ""
    //validate if users exists
    const { error } = await supabase.auth.signUp({
      email, password
    })
    if (error) {
      loading.value = false
      return errorMess.value = error.message
    }
    // insert
    await supabase.from("users").insert({
      username, email
    });

    const { data: userNew } = await supabase.from("users")
      .select()
      .eq('username', username)
      .single()

    user.value = {
      id: userNew.id,
      email: userNew.email,
      username: userNew.username
    }
    loading.value = false
  }
  const handleLogout = async () => { 
      await supabase.auth.signOut()
      user.value = null
  }
  const getUser = async () => {
    loadingUser.value = true;
    const { data } = await supabase.auth.getUser()

    if (!data.user) {
      loadingUser.value = false
      return user.value = null
    }
    const { data: userwithEmail } = await supabase
      .from("users")
      .select()
      .eq("email", data.user.email)
      .single()
    user.value = {
      username: userwithEmail.username,
      email: userwithEmail.email,
      id: userwithEmail.id,

    }
     loadingUser.value = false
  }
  const clearErr = () => {
    errorMess.value = ""
  }


  return { user, errorMess, loading, loadingUser, user, handleLogin, handleSignup, handleLogout, getUser, clearErr }
})
