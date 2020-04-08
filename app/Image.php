<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * @var string $table
     */
    protected $table = 'images';
    
    /**
     * @var array $filable
     */
    protected $filable = array('name','image','scale','posY','posX');
}
