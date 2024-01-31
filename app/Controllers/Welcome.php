<?php

namespace App\Controllers;

class Welcome extends BaseController // Add 'extends Controller' for proper inheritance
{
    public function index():string
    {
       
        return view('tic-take-toe');

    }
}
