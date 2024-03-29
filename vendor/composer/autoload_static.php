<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit35a4978e336a0a5ab36dfc5a08959196
{
    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'DesignPatterns\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'DesignPatterns\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit35a4978e336a0a5ab36dfc5a08959196::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit35a4978e336a0a5ab36dfc5a08959196::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit35a4978e336a0a5ab36dfc5a08959196::$classMap;

        }, null, ClassLoader::class);
    }
}
