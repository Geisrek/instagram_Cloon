<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;
class userController extends Controller
{
   function addUser (Request $req){
    $name=$req->name;
    $email=$req->email;
    $password=$req->password;
    users::create([
        "name"=>$name,
        "email"=>$email,
        "password"=>password_hash($password,PASSWORD_BCRYPT)
    ]);
    return response()->json([
        "message"=>"success"
    ]);
   }
   function signin (Request $req){
    $email=$req->email;
    $password=$req->password;
    $user=users::where("email",$email)->first();
    if(password_verify($password,$user["password"])){
    
    return response()->json([
        "message"=>"success",
        "user"=>$user
    ]);
    
}else{
    return response()->json([
        "message"=>"access denied"
    ]);
}
   }
}
