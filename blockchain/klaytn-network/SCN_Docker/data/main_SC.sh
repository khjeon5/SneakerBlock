#!/bin/bash

homi setup local --cn-num 4 --test-num 4 --servicechain --p2p-port 30000 -o /var/homi-output

sed -i "2s/@0.0.0.0/@172.168.7.10/g" /var/homi-output/scripts/static-nodes.json
sed -i "3s/@0.0.0.0/@172.168.7.20/g" /var/homi-output/scripts/static-nodes.json
sed -i "4s/@0.0.0.0/@172.168.7.30/g" /var/homi-output/scripts/static-nodes.json
sed -i "5s/@0.0.0.0/@172.168.7.40/g" /var/homi-output/scripts/static-nodes.json
sed -i 's/30001/30000/g' /var/homi-output/scripts/static-nodes.json
sed -i 's/30002/30000/g' /var/homi-output/scripts/static-nodes.json
sed -i 's/30003/30000/g' /var/homi-output/scripts/static-nodes.json 

mkdir /data
kscn --datadir /data init /var/homi-output/scripts/genesis.json

cp -r /var/homi-output/scripts/static-nodes.json /data/
cp -r /var/homi-output/keys/nodekey1 /data/klay/nodekey

sed -i "s/PORT=22323/#PORT=22323/g" /klaytn-docker-pkg/conf/kscnd.conf
sed -i -r -e "/#PORT=22323/i\PORT=30000" /klaytn-docker-pkg/conf/kscnd.conf
sed -i "s/DATA_DIR=/#DATA_DIR=/g" /klaytn-docker-pkg/conf/kscnd.conf
sed -i -r -e "/#DATA_DIR/i\DATA_DIR=/data" /klaytn-docker-pkg/conf/kscnd.conf 