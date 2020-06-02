const recordVideoOne = new Promise((resolve, reject)=>{
  resolve('video 1 is recorded')
})

const recordVideoTwo = new Promise((resolve, reject)=>{
  resolve('video 2 is recorded')
})

const recordVideoThree = new Promise((resolve, reject)=>{
  resolve('video 3 is recorded')
})
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then((message)=>{
  console.log(message)
})
