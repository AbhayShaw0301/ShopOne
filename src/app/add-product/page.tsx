import React from 'react';
import prisma from "@/lib/prisma";
import {redirect} from "next/navigation";
import FormSubmitButton from "@/components/FormSubmitButton";

export const metadata = {
    title: "Add Product - ShopOne",
    description: "Adding to your happiness",
};


async function addProducts(formData:FormData){
    "use server";

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl =formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
      throw Error("Missing fields");
  }

  await prisma.product.create({
      data : { name, description, imageUrl, price },
  });

    redirect("/");

}

const AddProduct = () => {


    return (
        <div>
            <h1 className="font-bold text-lg mb-3">Add Products</h1>
            <form action={addProducts}>
                <input name="name" placeholder="Name" className="mb-3 input input-bordered w-full" required/>
                <textarea name="description" placeholder="Description" className="mb-3 input  w-full" required></textarea>
                <input name="imageUrl" placeholder="Image Url" className="mb-3 input input-bordered w-full" required/>
                <input name="price" placeholder="Price" className="mb-3 input input-bordered w-full" required/>
            <FormSubmitButton className="btn-block" >Add to Cart</FormSubmitButton>
            </form>
        </div>
    );
};

export default AddProduct;