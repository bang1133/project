<script setup lang="ts">
import { ref, computed } from "vue";
import Card from "./components/Cards.vue";
import {GENDER, type INVITEE} from "./type"
const name = ref("");
const gender = ref(GENDER.MALE);
const invitess = ref<INVITEE[]>([]);
const addInvitee = (): void => {
  if (name.value) {
    invitess.value.push({
      id: Math.floor(Math.random() * 1000000),
      name: name.value,
      gender: gender.value,
    });
    name.value = "";
    gender.value = GENDER.MALE;
  }
};
  const count = computed<{
    female : number,
    male : number,
  }>(() => {
    return invitess.value.reduce((countObj, invitess) => {
      if(invitess.gender === GENDER.MALE){
        return {
          ...countObj,
          male:countObj.male + 1
        }
      }
      return {
        ...countObj,
          female:countObj.female + 1
      }
    }, {male: 0, female:0})
  })
</script>
  <template>
  <main>
    <div>
      <h1>People Invited to My Party</h1>
      <div class="input-container">
        <input
          type="text"
          v-model="name"
          placeholder="Name..."
          @keypress.enter="addInvitee"
        />
        <select v-model="gender" @keypress.enter="addInvitee">
          <option :value="GENDER.MALE">Male</option>
          <option :value="GENDER.FEMALE">Female</option>
        </select>
      </div>
      <div class="cards-container">
        <Card
          v-for="invitee in invitess"
          :key="invitee.id"
          :invitee="invitee"
        />
      </div>
      <div>
        <p>Female = {{ count.female }}</p>
        <p>Male = {{ count.male }}</p>
      </div>
    </div>
  </main>
</template>

  <style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}
input,
select {
  width: 100%;
  padding: 5px;
  margin-bottom: 2px;
}
</style>
