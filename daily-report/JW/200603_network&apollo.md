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
        ```sh
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
        ```

# 2. apollo-server with MongoDB

## 1. MongoDB Connect
        - MongoDB와 연결하기 위해선 2.2.12.X 버전을 사용하여 연결해야 함.

## 2. graphql made DB collection
        - MongoDB에서 product collection에 DB를 생성하려 했지만, default로 porducts로 생성이 된다.

# 3. 총평

오늘 하루도 알찬 하루였다. 오후에 스벅도 가고 아주 좋았다 다음에 또 갔으면 좋겠다. 당장 내일 갈 것이다.<br>
graphql에서 원하는 collection에 DB생성을 못 한다는 아주 큰 시련이 다가왔지만, default값이 products라는 것을 믿기로 했다.<br>
애정합니다. 여러분들
