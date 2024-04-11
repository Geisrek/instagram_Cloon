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
      //The king is here babe B)
      $id=$req->id;
      $follows=follows::join("users","users.id",'=',"follows.followed")->where("follows.follower",$id)->get();
      $common_friends=[];
      for($i=0;$i<count($follows);$i++){
         $friends=follows::join("users","users.id",'=',"follows.followed")->where("follows.follower",$follows[$id])->get();
         $friend=$follows[$i]->followed;
         if(!var_dump(array_key_exists($friend,$common_friends))){
         $common_friends[$friend]=$friends[0]=0;
      }else{
         $common_friends[$friend]=$friends[0]+=1;
      }
      }
      return response()->json(["message"=>"success",
  "common friends"=>$common_friends]);
     }
   function unfollow(Request $req){
    $followed=$req->followed;
    $follower=$req->follower;

    $follows=follows::where("follower",$follower)->where("followed",$followed)->first();

    $follows->delete();
    return response()->json(["message"=>"success"]);
   }
   
}
