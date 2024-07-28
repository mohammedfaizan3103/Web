export default function Page({ params }) {
    let langs = ["python", "js", "java", 'c']
    if(langs.includes(params.slug)) {
        return <div>My Post: {params.slug}</div>
    }  
    else {
        return <div>Page not found</div>
    }
}