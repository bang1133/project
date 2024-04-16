    import  {defineStore} from "pinia"
    export const useNumbersStore =  defineStore("numbers",{
        state: () => {
            return {
                numbers:[1,2,3,4,5,7,8,9]                                           
            }
        },
        actions:{
            addNumbers(num){
                this.numbers.push(num)
            }
        },
        getters: {
            doubleNumber:(state) => {
                return state.numbers.map( num => num*2)
            },
            filterNum: (state) => (minNum) => {
                return state.numbers.filter(num => num >= minNum)
            }
            
        }
    })