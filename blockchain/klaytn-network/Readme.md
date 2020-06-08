# 1. Network

## 1. Service chain in cloud
- 로컬에서 서비스 체인 구축 완료 후 GCP에 올려 서비스 체인 구축        
- 최소 사양이 되지 않은 서비스 체인은 블록 생성 시, 속도 저하 문제 발생        
- 최소 사양을 갖춘 서비스 체인에선 1초에 1block 생성 확인.        
- 다른 인스턴스에서 구성 시, 외부 IP가 변경 된 다는 문제점으로 인하여 같은 인스턴스 의 서버 4대 구동        
**서비스체인 기본 사양: 4core, RAM: 16GB, SSD: 50GB**        
- 같은 인스턴스 내에 통신 시, 방화벽을 내림.(ufw disable)        
**GCP 내 자체 정책이 있으므로 외부 공격 방지 가능**        
- GCP을 사용할 경우 lrzsz등 로컬 파일 업로드 기능이 차단되어 있으므로 gcloud 기능을 사용하는 것을 추천    
- 참고 URL : https://ko.docs.klaytn.com/node/service-chain/getting-started/4nodes-setup-guide
        
        ##service_chain_install##

        ##main_service_node##
        wget http://packages.klaytn.net/klaytn/v1.4.2/kscn-v1.4.2-0-linux-amd64.tar.gz
        tar zxvf kscn-v1.4.2-0-linux-amd64.tar.gz
        wget http://packages.klaytn.net/klaytn/v1.4.2/homi-v1.4.2-0-linux-amd64.tar.gz
        tar zxvf homi-v1.4.2-0linux-amd64.tar.gz
        cd homi-linux-amd64/bin
        ./homi setup local --cn-num 4 --test-num 1 --servicechain --p2p-port 30000 -o homi-output
        ##--cn-num = service node 갯수, --test-num = testkey 생성 갯수, --p2p-port = node 통신 포트, -o = output 파일 명##
        vim homi-output/scripts/static-nodes.json
        ##service chain IP와 통신 port 지정##
        scp -r homi-output user@nodeIP:~/

        ##node 초기화(모든 node에서 사용)##
        wget http://packages.klaytn.net/klaytn/v1.4.2/kscn-v1.4.2-0-linux-amd64.tar.gz
        tar zxvf kscn-v1.4.2-0-linux-amd64.tar.gz
        mkdir ~/data
        ./kscn --datadir ~/data init ~/homi-output/script/genesis.json
        cp -r ~/homi-output/script/static-nodes.json ~/data/
        cp -r ~/homi-output/keys/nodekey{node number} ~/data/klay/nodekey
        vim kscn-linux-amd64/conf/kscnd.conf
        ##port, data_dir, sc_sub_bridge 수정##
        ##port = 30000, data_dir = ~/data, sc_sub_bridge=0(main node에서는 1로 만들어야 EN과 연결 가능)##
        ./kscnd start
        netstat -nlpt | kscn
        ##kscn으로 되어 있는 포트가 30000, 30001(node port), 8551, 8552(rpc port) 열려있으면 kscnd 정상 작동##

        ##block check##
        kscn attach --datadir ~/data
        > klay.blockNumber
        43
        ##blockNumber가 0이 아니면 정상 작동##

## 2. Endpoint Node in Cloud
- 클레이튼 테스트넷 baobab 엔드포인트 GCP에 구축
- 불록 동기화를 위해 클레이튼 테스트넷 baobab은 50GB, 메인넷 cypress의 경우 700GB정도의 스냅셧을 다운로드 받아야 함
- 블록동기화된 en에 klay.blockNumber 명령어로 현재 블록 수를 확인
- 엔드포인트 노드 기본 사양
**8core, RAM: 32GB, SSD: 50GB**
- 참고링크: https://ko.docs.klaytn.com/node/endpoint-node/installation-guide/installation-guide




## 3. EN-Servicechain Connect
- Baobob을 통한 앤드포인트(EN)과 서비스체인(SC) 연결
- 참고 URL : https://ko.docs.klaytn.com/node/service-chain/getting-started/en-scn-connection
- EN에 Baobab연결
- EN 서버에 genesis.json 다운로드

        curl -X GET http://packages.klaytn.net/baobab/genesis.json -o ~/genesis.json
        *안될 시, SC genesis.json 파일로 가능
        
- EN 노드 초기화

        ken --datadir ~/data init ~/genesis.json
        *EN 재설정 후 다시 초기화(IP가 바뀌어도 다시 초기화해야된다.)
        
- EN 노드 설정

        NETWORK="baobab"
        SC_MAIN_BRIDGE=1
        DATA_DIR=~/data
        *ken-linux-amd64/conf/kend.conf 파일 수정
        
- EN 실행

        kend start
        
- 블록 확인으로 Baobab 연결 성공 여부 확인

        kend attache --datadir ~/data
        > klay.blockNumber
        1234
        > mainbridge.nodeInfo.kni
        *kni 확인 후 따로 정보 저장 필수

- SCN 노드 하나에 main-bridge.json 파일생성
- data dir안에 main-bridge.json 파일 생성
*하나에만 설정을 해야 됨. ::에 IP 및 포트 설정

        echo '["kni://0f7aa6499553cdfeb8f21df10c656252ca6039047242eb86278689a87d57a41f9f004720180d1921e9f7632a4c6476f1775a2c381568d8e8c3c9c4a8cfe25bae@::?discport=0"]' > ~/data/main-bridges.json
        

- SCN 설정 후 재부팅 한다. ksncd.conf 파일 재설정

        SC_SUB_BRIDGE=1
        SC_PARENT_CHAIN_ID=1001
        SC_TX_PERIOD=10
        
        kscnd restart
        
        kscn attach --dataidr ~/data
        > subbridge.peers.length
        
