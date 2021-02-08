---------------------------------------------------------------------
 Configuration files & tools, for Windows with Apache, PHP & SQLite
---------------------------------------------------------------------

##############################
|   What you have inside :   |
##############################

* Apache configuration

* PHP configuration

* TLS1.3 configurations

* Security headers (Checked on https://observatory.mozilla.org)

* Log files

* Unique CSS file (Example given inside index.php)

* SendMail configuration file (Fill it optionaly)

######################
|   Instructions :   |
######################

* Download "Visual C++ Redistributable for Visual Studio 2015" (https://aka.ms/vs/16/release/vc_redist.x64.exe).

* Download "Apache" (https://www.apachelounge.com/download/).

* Extract Apache\ folder to C:\ folder.

* Download the httpd.conf file into C:\Apache\conf\ (replace the existing file).

* In httpd.conf, Set the defined variables according to your info.

* Run in PowerShell as administrator: httpd -t (fix any problem reported before continue).

* Run in PowerShell as administrator: httpd -k install (will make an apache service you can use to power on/off the server).

* Download "PHP Thread Safe" (https://windows.php.net/download).

* Extract php\ folder to C:\Apache\ folder.

* Download the php.ini file into C:\Apache\php\ (replace the existing file).

* In php.ini (go to line 96), set your timezone (https://www.php.net/manual/en/timezones.php).

* Append the folders 'C:Apache\php' and 'C:\Apache\php\ext' to *system* path variable (https://superuser.com/questions/949560/how-do-i-set-system-environment-variables-in-windows-10).

* Create mail\ (sendmail), 'opcache' (OPcache extension for PHP) & 'website' folders inside C:\Apache\ folder.

* Put 'css.css','error.html','success.html','index.html','head.js' inside 'website' folder.

* Create a custom error page (called: "error.html"), and put it inside any subdomain folder of apache.

* Get a nice Icon, and put him inside your 'website' folder (name it "icon.ico").

* Go to "Task Manager", go to the tab "services", and restart "apache" service.

* Now you have a website!

---------         
 ENJOY !
---------
