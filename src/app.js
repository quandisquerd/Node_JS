
import express from "express"
import mongoose from "mongoose";


import routerProduct from "./router/product";
import routerUser from "./router/auth"
import cors from "cors"
import Routercategory from '../src/router/category'
import RouterUploadImage from '../src/router/uploadImage'
import RouterUser from '../src/router/user'
const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use('/api', routerProduct)
app.use('/api', Routercategory)
app.use('/api', routerUser)
app.use('/api', RouterUploadImage)
app.use('/api', RouterUser)
mongoose.connect("mongodb+srv://admin:admin@cluster0.hhw8z47.mongodb.net/nameDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}).then(() => {
    console.info('Connect database successfully'); // check cais nafy để biết là nó connect với thằng database chưa đừng dùng cái cú dùng cái cũ mày đéo biết là nó con nect thanh công hay không
})
    .catch((error) => {
        console.info(error);
    });; // nameDatabase là tên database admin là user sau : là pass muốn thêm acc thì thêm trong thằng database access

export const viteNodeApp =app
