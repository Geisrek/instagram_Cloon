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
    function deletePost(Request $req){
        $user_id=$req->user_id;
        $id=$req->id;
        $post=posts::where("id",$id)->where("user_id",$user_id)->first();
        $post->delete();
        return response()->json(["status"=>"success"]);
    }
    function updatePost(Request $req){
        $user_id=$req->user_id;
        $id=$req->id;
        $image=$req->image;
        $description=$req->des;
        $post=posts::where("id",$id)->where("user_id",$user_id)->first();
       if($image!=null){
        $post->update(["user_id"=>$user_id,
        "image"=>$image]);}
        if($description!=null){
            $post->update(["user_id"=>$user_id,
            "description"=>$description]);
        }
        return response()->json(["status"=>"success"]);
    }
    function getPosts(Request $req){
        $user_id=$req->user_id;
        $user_posts=posts::where("user_id",$user_id)->get();
        $follows_posts=posts::join("follows as f","posts.user_id","=","f.followed")->where("f.follower",$user_id)->get();
        //$posts=array_merge($user_posts,$follows_posts);
        return response()->json(["status"=>"success",
        "posts"=>$follows_posts,"My posts"=>$user_posts]);
    }
}
