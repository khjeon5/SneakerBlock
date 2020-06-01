#오늘_정말_힘들었다.
#삽질을_정말_많이_한_것_같다.
#그래도_해결해서_다행이다.
#팀원들을_잘_만난_것_같다.
#사랑해요_Sneaker_Block

made servicechain(3 node)(portL: 300000)
*서비스체인 만들 시, 꼭 4개의 노드여야 함. kscn attach 실행이 되지 않아도 kscnd가 실행이 되므로 블록 생성 가능
connect service chain to endpoint node(port: 50505)
*EN 생성 시, 메인 브릿지 포트는 50505(EN), 서브 브릿지 포트는 50506(서비스체인)
*SUB_BRIDGE를 1로 설정
run proto type server(web3 provider)
*caver-js는 service chain에서도 실행 가능
*30000포트는 노드 포트 50505는 EN포트, 8551은 rpc포트이다. 포트 하나당 프로토콜 하나이며, 같은 포트로 다른 프로토콜을 사용하지 못한다.
*rpc 포트는 kscn.conf혹은 ken.conf 파일에서 RPC_PORT로 수정 가능(기본 8551을 사용한다.)
