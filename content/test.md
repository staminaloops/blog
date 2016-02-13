+++
Categories = ["React Native"]
Tags = ["react native","ubuntu","android"]
date = "2016-02-13T16:23:23+09:00"
title = "Install React Native Android on Ubuntu"
summary = "Install React Native Android on Ubuntu - a step by step guide"

+++
**Make sure you have the latest version of node and npm installed. If not:**
```
  curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
  sudo apt-get install -y nodejs
```

Afterwards, you should install/upgrade your npm:
```
  npm install -g npm
```

**It is recommended that you alter your default npm package folder to avoid needing
sudo when installing global packages. Please follow this guide: <https://docs.npmjs.com/getting-started/fixing-npm-permissions>**

## Install the latest JDK 

From [here](<http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>).  

---

Alternative (not tested, but taken from [google developers](http://developer.android.com/sdk/installing/index.html?pkg=tools)):  
*Here are the steps to install Java:
If you are running a 64-bit distribution on your development machine, you need to install additional packages first. For Ubuntu 13.10 (Saucy Salamander) and above, install the libncurses5:i386, libstdc++6:i386, and zlib1g:i386 packages using apt-get:*
```
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install libncurses5:i386 libstdc++6:i386 zlib1g:i386
```
*For earlier versions of Ubuntu, install the ia32-libs package using apt-get:*
```
apt-get install ia32-libs
```
*Next, install Java:*
```
apt-get install sun-java6-jdk
```
---

## Install the Android SDK

 - Download from here: https://developer.android.com/sdk/index.html#Other
 - add this to your ~/.bashrc, ~/.bash_profile or whatever your shell uses:
```
export ANDROID_HOME=<path_where_you_unpacked_android_sdk>
```
**Configure your SDK**

- Open the Android SDK Manager
```
cd <path_where_you_unpacked_android_sdk>/tools
./android
```

- In the window that appears make sure you check:
  - Android SDK Build-tools version 23.0.1
  - Android 6.0 (API 23)
  - Android Support Repository  

- Click "Install Packages"

## Install watchman  
Facebook recommend installing [watchman](https://facebook.github.io/watchman/), otherwise you might hit a node file watching bug. You will need autoconf and automake. You may optionally build watchman with pcre and python support. For python support, you will also need setuptools and may need to install a python-dev or python-devel package.

```
sudo apt-get install automake
sudo apt-get install autoconf
sudo apt-get install python-setuptools
sudo apt-get install python-dev

git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v4.4.0  # the latest stable release
./autogen.sh
./configure
make
sudo make install
```
Check that is installed with `watchman -v`

## Install Genymotion

([source](http://ubuntuhandbook.org/index.php/2014/02/install-android-emulator-ubuntu-linux/)):

1. This Android Emulator requires Virtualbox, so first search for and install virtualbox in Ubuntu Software Center.
2. Register https://cloud.genymotion.com/ (free for personal use).
3. Download the installer after your login the website: https://www.genymotion.com/download/.
4. If you save the installer in the default Downloads folder, press Ctrl+Alt+T to open terminal. When it opens, run below commands one by one:
```
cd ~/Downloads/

chmod +x genymotion-2.1.0_x64.bin

./genymotion-2.1.0_x64.bin
```
It first navigate to Downloads folder, then give executable permission, and finally start the installer. **Of course you need to change the file-name version to yours**.

cd to installation directory, then run: `./genymotion`

## Install React Native
```
npm install -g react-native-cli
```
## Start a project

```
react-native init AwesomeProject
```

This command fetches the React Native source code and dependencies and then creates a new Xcode project in AwesomeProject/iOS/AwesomeProject.xcodeproj and a gradle project in AwesomeProject/android/app.

## Develop
1) **Init genymotion**
```
<path_where_you_unpacked_genymotion-2.1.0_x64.bin>/genymotion/genymotion
```
Example if you save the installer in the default Downloads folder:
```
~/Downloads/genymotion/genymotion
```

Choose an emulator and download it.

2) **On a new terminal run from AwesomeProject root directory:**

`touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties`

`react-native run-android` to install the generated app on your emulator and start the Node server which enables live code reloading.

`react-native start`

**Check your Genymotion.**  To see your changes you have to open the rage-shake-menu (CRTL+M for Genymotion), and then press Reload JS. Enable live reload for.. live reload.

## Troubleshooting
See [this gist](https://gist.github.com/staminaloops/02573a94cb59fdf2b1e1)