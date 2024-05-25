import path from 'path';


const config = {
    SERVER: 'remoto_atlas',
    PORT: 5050,
    
    DIRNAME: path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:\/)/, '$1')),
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/img` },
    MONGODB_URI: "mongodb+srv://agustinamontecchia98:coder123@agustinamontecchia.j7zgzql.mongodb.net/",
    MONGODB_ID_REGEX: /^[a-fA-F0-9]{24}$/
}

export default config;