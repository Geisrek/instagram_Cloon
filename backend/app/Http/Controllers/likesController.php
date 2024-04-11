<?php

namespace App\Http\Controllers;
use App\Models\likes;
use Illuminate\Http\Request;

class likesController extends Controller
{
   function makeLike(Request $req){
    $post_id=$req->post_id;
    $user_id=$req->user_id;
    likes::insert([
        "post_id"=>$post_id,
        "user_id"=>$user_id
    ]);
    response()->json(["status"=>"success"]);
   }
   function disLike(Request $req){
    $post_id=$req->post_id;
    $user_id=$req->user_id;
    $like=like::where("post_id",$post_id)->where("user_id",$user_id)->first();
    $like->delete();
    response()->json(["status"=>"success"]);
   }
}
