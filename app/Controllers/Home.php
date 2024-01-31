<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        echo "hello" ;
        $this -> ok() ;
        return view('welcome_message');
    }

    public function ok()
    {
        echo "i";
    }
}
