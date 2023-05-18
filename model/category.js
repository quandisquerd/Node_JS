
// import mongoose from "mongoose";

// const categorySchema = mongoose.Schema({
//     name: String,
//     //    products :[{type:mongoose.Types.ObjectId,ref:"Product"}]
//     products: [
//         {
//             type: mongoose.Types.ObjectId,
//             ref: "Product"
//         }
//     ],
// },
//     { timestamps: true, versionKey: false }
// );

// export default mongoose.model("Category", categorySchema);
import mongoosePaginate from "mongoose-paginate-v2";
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: String,
        products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    },
    { timestamps: true, versionKey: false }
);
categorySchema.plugin(mongoosePaginate);
export default mongoose.model("Category", categorySchema);