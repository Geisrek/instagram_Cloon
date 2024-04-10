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
}
