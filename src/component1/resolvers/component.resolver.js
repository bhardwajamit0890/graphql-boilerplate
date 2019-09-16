import axios from 'axios'

export default {
  Query: {
    hello () {
      return 'Hello world'
    },
    apied () {
      return axios.get('https://dog.ceo/api/breeds/list/all').then(res => {
        console.log(res)
        return res.data.status
      })
    }

  }
}
