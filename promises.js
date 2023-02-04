const posts=[
    {title:'post One', body:'This is post one'},
    {title:'post two', body:'this is post two'}
]
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index) => {
           output+='<li>post.title</li>'
        })
        document.body.innerHTML=output
    },1000)
}
function createPost(post){
    return new Promise((resolve,reject)=>{
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
}


function deletePost(){
    return new Promise((resolve,reject)=>{
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

createPost({title:'post three',body:'this is post three'}).then(()=>{
    getPosts()
    deletePost().then((deletedElement)=>{
        console.log(deletedElement)
        getPosts()
        deletePost().then(()=>{
            getPosts()
            deletePost().then(()=>{
                getPosts()
            deletePost().then(()=>{})
            .catch((err)=>{
                console.log('inside catch block',err)
            })
        })
    })
})
})
createPost({title:'post four',body:'this is post four'}).then(()=>{
    getPosts()
    deletePost().then((deletedElement)=>{
        console.log(deletedElement)
        getPosts()
        deletePost().then(()=>{
            getPosts()
            deletePost().then(()=>{
                getPosts()
                deletePost().then(()=>{
                    getPosts()
            deletePost().then(()=>{})
            .catch((err)=>{
                console.log('inside catch block',err)
            })
        })
    })
})
})
})

createPost({title:'post three',body:'this is post three'}).then(getPosts)
updatelastactivitytime=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            URLSearchParams.updatelastactivitytime=new Date().getTime()
            resolve(user.updatelastactivitytime)
        },1000)
    })
}
userupdateapost=()=>{
Promise.all([createPost,updatelastactivitytime]).then(([createPostresolves,updatelastactivitytimeresolves])=>{
    console.log(updatelastactivitytimeresolves)
})
.catch(err=>console.log(err))
}

// callback functopn pass as an argumant to a function but Promises are something which can achieve in future.
// Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events