#MakeFile to build Periodic Table Study tool
# 

# Put your user name below:
USER= shurbertj

CC= g++
 
#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++14

RM= /bin/rm -f

all: PutHTML



PutHTML:
	cp studytool.html /var/www/html/class/softdev/$(USER)/Project2/
	cp studytool.css /var/www/html/class/softdev/$(USER)/Project2/
	cp studytool.js /var/www/html/class/softdev/$(USER)/Project2/
	cp allelements.xml /var/www/html/class/softdev/$(USER)/Project2/


	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/Project2/
	
clean:
	rm -f *.o  Project2