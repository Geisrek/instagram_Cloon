<?php

namespace App\Http\Controllers;
use App\Models\posts;
use Illuminate\Http\Request;

class postsController extends Controller
{
    function addPost(Request $req){
        $user_id=$req->user_id;
        $image=$req->image;
        $description=$req->des;
        if($image==null && $description==null){
            return response()->json(["status"=>"failed",
        "message"=>"empty post"]);
        }
        posts::create(["user_id"=>$user_id,
        "image"=>$image,
        "description"=>$description]);
        return response()->json(["status"=>"success"]);
    }
}
