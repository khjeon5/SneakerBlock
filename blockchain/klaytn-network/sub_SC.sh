#!/bin/bash

echo -n "What is your name?"
read -p "user name:" user_name

mkdir /home/$user_name/klaytn
mkdir /home/$user_name/klaytn/src/
cd /home/$user_name/klaytn/src/
wget http://packages.klaytn.net/klaytn/v1.4.2/kscn-v1.4.2-0-linux-amd64.tar.gz
tar zxvf kscn-v1.4.2-0-linux-amd64.tar.gz

mkdir /home/$user_name/klaytn/data
cd /home/$user_name/klaytn/src/kscn-linux-amd64/bin
./kscn --datadir /home/$user_name/klaytn/data init /home/$user_name/homi-linux-amd64/bin/homi-output/scripts/genesis.json

cp -r /home/$user_name/homi-output/scripts/static-nodes.json /home/$user_name/klaytn/data/

echo -n "Enter your node number: "
read number

if [ $number = 2 ]; then 
	cp -r /home/$user_name/homi-output/keys/nodekey2 /home/$user_name/data/klay/nodekey
elif [ $number = 3 ]; then
	cp -r /home/$user_name/homi-output/keys/nodekey3 /home/$user_name/data/klay/nodekey
elif [ $number = 4 ]; then
	cp -r /home/$user_name/homi-output/keys/nodekey4 /home/$user_name/data/klay/nodekey
fi

echo -n "Would you change kscnd.conf?(y/n)"
read input

if [ $input = y ]; then
	sed -i "s/PORT=22323/#PORT=22323/g" /home/$user_name/klaytn/src/kscn-linux-amd64/conf/kscnd.conf
	sed -i -r -e "/#PORT=22323/i\PORT=30000" /home/$user_name/klaytn/src/kscn-linux-amd64/conf/kscnd.conf
	sed -i "s/DATA_DIR=/#DATA_DIR=/g" /home/$user_name/klaytn/src/kscn-linux-amd64/conf/kscnd.conf
	sed -i -r -e "/#DATA_DIR/i\DATA_DIR=~/klaytn/data" /home/$user_name/klaytn/src/kscn-linux-amd64/conf/kscnd.conf
fi

echo -n "Do you start kscnd start?(y/n)"
read answer
 if [ $kscnd = y ]; then
	 cd /home/$user_name/klaytn/src/kscn-linux-amd64/bin/
	 ./kscnd start
 elif [ $kscnd = n ]; then
	 echo "Installed Service-node"
 fi
