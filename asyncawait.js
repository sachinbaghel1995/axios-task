console.log('person 1 : shows ticket')
console.log('person 2 : shows ticket')
const preMovie = async()=>{
    const promisewifebringingtickets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    })
    const getPopCorn = new Promise((resolve,reject)=>resolve('popcorn'))

    const addButter = new Promise((resolve,reject)=>resolve('butter'))

    const getColdDrinks = new Promise((resolve,reject)=>resolve('coldDrinks'))
    let ticket = await promisewifebringingtickets;
    let[popcorn,butter,coldDrinks]= await Promise.all([getPopCorn,addButter,getColdDrinks])
    console.log('${popcorn},${butter},${coldDrinks}')

    return ticket
}
preMovie().then((m)=>console.log('person 3 : shows'+' '+m))
console.log('person 4 : shows ticket')
console.log('person 5 : shows ticket')

// convert delete pos and create post in async await

const posts = async()=>{
const createPost = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
                posts.push(post)
                const error=false
                if(!error)
                {
                    resolve()
                }
                else{
                    reject('Error:something went wrong')
                }
            },2000)
        })

        const deletePost =await new Promise((resolve,reject)=>{
            setTimeout( ()=> {
                if(posts.length>0){
                    const lastElement = posts.pop()
                    resolve(lastElement)
                }
                else{
                    reject('Array is empty now')
                }
            },1000)

        })
    }
    posts().then((m)=>{

        consol
    })