import {ref, provide} from  "vue"

const useAge = () => {

        const numbers = ref([1,2,3,4,5,7,8,9])
    const addNumbers = (num) => {
        numbers.value.push(num)
    }
    const filterNum = (minNum) => {
        return numbers.value.filter(num => num >= minNum)
    }
    return {
        numbers,
        addNumbers,
        filterNum
    }
}
 export default useAge