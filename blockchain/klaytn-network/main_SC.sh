#!/bin/bash

echo -n "What is your name?"
read -p "user name:" user_name

mkdir /home/$user_name/klaytn
mkdir /home/$user_name/klaytn/src/
cd /home/$user_name/klaytn/src/
wget http://packages.klaytn.net/klaytn/v1.4.2/kscn-v1.4.2-0-linux-amd64.tar.gz
tar zxvf kscn-v1.4.2-0-linux-amd64.tar.gz
wget http://packages.klaytn.net/klaytn/v1.4.2/homi-v1.4.2-0-linux-amd64.tar.gz
tar zxvf homi-v1.4.2-0-linux-amd64.tar.gz
cd /home/$user_name/klaytn/src/homi-linux-amd64/bin/
./homi setup local --cn-num 4 --test-num 4 --servicechain --p2p-port 30000 -o homi-output
while : 
do
echo "What is your node address?"
echo -n "first node: " 
read -p first_node
echo -n "secound node: "
read -p second_node
echo -n  "third node: "
read -p third_node
echo -n  "forth node: "
read -p forth_node

echo -n "Are you sure?(y/n)"
read answer

if [ $answer = n ]; then
	echo "Worng IP"
elif [ $answer = y ]; then
	sed -i "s/0.0.0.0/$first_node/g" /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json
	sed -i "s/0.0.0.0/$second_node/g" /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json
	sed -i "s/0.0.0.0/$third_node/g" /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json
	sed -i "s/0.0.0.0/$forth_node/g" /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json
	sed -i 's/30001/3000/g' /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json
	sed -i 's/30002/3000/g' /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json
	sed -i 's/30003/3000/g' /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json
	cat /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json
	break
fi
done

scp -r /usr/local/src/homi-linux-amd64/bin/homi-output/script/static-nodes.json root@$second_node:~/ 
scp -r /usr/local/src/homi-linux-amd64/bin/homi-output/script/static-nodes.json root@$thrid_node:~/ 
scp -r /usr/local/src/homi-linux-amd64/bin/homi-output/script/static-nodes.json root@$forst_node:~/ 

mkdir /home/$user_name/klaytn/data
cd /home/$user_name/klaytn/src/kscn-linux-amd64/bin
./kscn --datadir /home/$user_name/klaytn/data init /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/genesis.json

cp -r /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/scripts/static-nodes.json /home/$user_name/klaytn/data/

echo -n "Are you main node?"
read number

if [ $number = 1 ]; then
	cp -r /home/$user_name/klaytn/src/homi-linux-amd64/bin/homi-output/keys/nodekey1 /home/$user_name/klaytn/data/klay/nodekey
elif [ $number = 2 ]; then 
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
	 ./home/$user_name/klaytn/src/kscnd-linux-amd64/bin/kscnd start
 elif [ $kscnd = n ]; then
	 echo "Installed Service-node"
 fi
