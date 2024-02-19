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
              nodePackages.node2nix

            ];
            shellHook = ''
              export NODE_OPTIONS=--openssl-legacy-provider
            '';
          };
          nodeDependencies = (pkgs.callPackage ./default.nix { }).nodeDependencies;


          app = pkgs.stdenv.mkDerivation {
            name = "my-app";
            src = ./.;
            buildInputs = [ 
              pkgs.nodejs 
            ];
            buildPhase = ''
              ln -s ${nodeDependencies}/lib/node_modules ./node_modules
              export PATH="${nodeDependencies}/bin:$PATH"
              # Build the distribution bundle in "dist"
              npm run build
              cp -r src/.vuepress/dist $out/
            '';
            NODE_OPTIONS="--openssl-legacy-provider";
          };


        in
        {
          app = app;
          packages.default = app;
          devShells.default = devshell;

        })
    );
}
