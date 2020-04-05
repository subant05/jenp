import {proxy} from '../src/pattern/index'

test("Testing: proxy",()=>{
    const developer = {
        name: "John Doe"
        , language: "JavaScript"
        , editor: "Atom"
    }

    let get = 0
    let set = 0

    const proxyDeveloper = proxy(developer,{
        get(target, key){
            get++;
            
            return "From Proxy: " + target[key]
        }
        , set(target, key, value){
            set++;
        }
    })


    proxyDeveloper.editor = 0

    expect(proxyDeveloper.name).toBe("From Proxy: John Doe")
    expect(proxyDeveloper.language).toBe("From Proxy: JavaScript")
    expect(proxyDeveloper.editor).toBe("From Proxy: Atom")
    expect(get).toBe(3)
    expect(set).toBe(0) // set() is overriden by proxy() to prevent mutation
})