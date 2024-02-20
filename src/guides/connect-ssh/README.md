# Connect to a Flakery Instance via SSH

```nix
{ config, pkgs, ... }:

{

  # Set your time zone.
  time.timeZone = "America/Los_Angeles";


  system.stateVersion = "23.05"; 
  nix.settings.experimental-features = [ "nix-command" "flakes" ];


  users.users.alice = {
    isNormalUser = true;
    extraGroups = [ "wheel" ]; # Enable ‘sudo’ for the user.
    packages = with pkgs; [ ];
  };

  services.openssh = {
    enable = true;
    # require public key authentication for better security
    settings.PasswordAuthentication = false;
    settings.KbdInteractiveAuthentication = false;
  };

  users.users."alice".openssh.authorizedKeys.keys = [
    # replace with your ssh key 
    "ssh-ed25519 NOTAREALKEYBUTTHISISWHEREYOURSSHOULDBEdslkfjsoi3cjnefoODIUFNI0JDNCKL+" 
  ];

}
```
