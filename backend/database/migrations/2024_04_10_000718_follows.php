<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        schema::create('follows',function(Blueprint $table){
            $table->id();
            $table->unsignedBigInteger("followed");
            $table->unsignedBigInteger("follower");
            $table->foreign("followed")->references("id")->on("users")->onDelete("cascade");
            $table->foreign("follower")->references("id")->on("users")->onDelete("cascade");
            $table->timestamps();
           });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('follows');
    }
};
