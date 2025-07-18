<?php

namespace App\Providers;

use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define("view-page", function (User $user) {
            return $user->role != "user";
        });

        Gate::define("view-page", function (User $user) {
            $roles = ["tutor", "student"];

            return in_array("$user->role", $roles);
        });
        //
    }
}
