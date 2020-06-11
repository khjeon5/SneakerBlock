#!/bin/bash

mkdir /data
kscn --datadir /data init /var/homi-output/scripts/genesis.json

cp -r /var/homi-output/scripts/static-nodes.json /data/
cp -r /var/homi-output/keys/nodekey2 /data/klay/nodekey

sed -i "s/PORT=22323/#PORT=22323/g" /klaytn-docker-pkg/conf/kscnd.conf
sed -i -r -e "/#PORT=22323/i\PORT=30000" /klaytn-docker-pkg/conf/kscnd.conf
sed -i "s/DATA_DIR=/#DATA_DIR=/g" /klaytn-docker-pkg/conf/kscnd.conf
sed -i -r -e "/#DATA_DIR/i\DATA_DIR=/data" /klaytn-docker-pkg/conf/kscnd.conf