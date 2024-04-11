<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\follows;
class followsController extends Controller
{
   function addFollow(Request $req){
    $followed=$req->followed;
    $follower=$req->follower;
    follows::create(["followed"=>$followed,
    "follower"=>$follower]);
    return response()->json(["message"=>"success"]);
   }
   
   function freands(Request $req){
    $id=$req->id;
    $follows=follows::join("users","users.id",'=',"follows.followed")->get();
    
    return response()->json(["message"=>"success",
"join"=>$follows]);
   }
   function comonfreands(Request $req){
      $id=$req->id;
      $follows=follows::join("users","users.id",'=',"follows.followed")->where("follows.follower",$id)->get();
      return response()->json(["message"=>"success",
  "join"=>$follows]);
     }
   function unfollow(Request $req){
    $followed=$req->followed;
    $follower=$req->follower;

    $follows=follows::where("follower",$follower)->where("followed",$followed)->first();

    $follows->delete();
    return response()->json(["message"=>"success"]);
   }
   
}
