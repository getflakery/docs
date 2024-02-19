{
  description = "basic flake-utils";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";


  outputs = { self, nixpkgs, flake-utils, ... }:
    (flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs {
            inherit system;
          };

          devshell = pkgs.mkShell {
            buildInputs = with pkgs; [
              nodejs
              yarn
            ];
          };


        in
        {
          # app = app;
          # packages.default = app;
          devShells.default = devshell;

        })
    );
}
