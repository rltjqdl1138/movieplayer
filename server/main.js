
const express = require('express')
const path = require('path')
const fs=require('fs')
const url = require('url')

const app = express();
const port = 4000;

app.use('/', express.static(path.join(__dirname, './../public')));
app.get('/api/image/*', (req,res)=>{
    const parsedUrl = url.parse(req.url)
    const resource = parsedUrl.pathname
    const sta = resource.indexOf("/image");
    const resourcePath = '.'+resource.substring(sta,resource.length)
    console.log('resource:\t'+resource)
    console.log('resourcePath:\t'+resourcePath)
    fs.stat(resourcePath+'.jpeg',(err,stats)=>{
        if(err){
            res.writeHead(403, {'Content-Type':'text/html'})
            return res.end(err)
        }
        res.writeHead(200,{
            "Content-Type":"image/jpeg"
        })
        const stream = fs.createReadStream(resourcePath+'.jpeg')
            .on("open",()=>{
                stream.pipe(res)
            }).on("error", (err)=>{
                res.end(err)
            })
    })
})
app.get('/api/movie/*', (req,res)=>{
    const parsedUrl = url.parse(req.url)
    const resource = parsedUrl.pathname
    const sta = resource.indexOf("/movie");
    
    const resourcePath = '..'+resource.substring(sta,resource.length)
    console.log('resource:\t'+resource)
    console.log('resourcePath:\t'+resourcePath)
    var range = req.headers.range
    if(!range)
            return res.sendStatus(416)
    var position = range.replace(/bytes=/,"").split("-")
    var start = parseInt(position[0],10)
    console.log(resourcePath+'.mp4')
    
    fs.stat(resourcePath+'.mp4', (err,stats)=>{
            if(err){
                    res.writeHead(500, {'Content-Type':'text/html'})
                    return res.end(err)
            }
            var total = stats.size
            var end = position[1] ? parseInt(position[1],10):total-1
            var chunksize = (end-start) + 1
            res.writeHead(206,{
                    "Content-Range":        "bytes "+start+"-"+end+"/"+total,
                    "Accept-Range":         "bytes",
                    "Content-Length":       chunksize,
                    "Content-Type":         "video/mp4"
            })

            const stream = fs.createReadStream(resourcePath+'.mp4', { start, end} )
                    .on("open",()=>{
                            console.log("open media file")
                            stream.pipe(res)
                    }).on("data",(data)=>{
                    }).on("error",(err)=>{
                            res.end(err)
                    })

    })


})
app.get('/api/hello', (req, res) => {
    console.log( 'on sign')
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(
        JSON.stringify({
            videoUrl: 'digimon/adventure',
            videoClass: '디지몬 어드벤처',
            videoList: [
                {
                    number: 1,
                    title: "모험의 섬"
                },
                {
                    number: 2,
                    title: "놀라운 진화 그레이몬!"
                },
                {
                    number: 3,
                    title: "푸른 늑대 가루몬!"
                },
                {
                    number: 4,
                    title: "불사조 버드라몬!"
                },
                {
                    number: 5,
                    title: "번개 용사 캅테리몬!"
                },
                {
                    number: 6,
                    title: "시드몬의 분노!"
                },
                {
                    number: 7,
                    title: "원뿔몬의 포효!"
                },
                {
                    number: 8,
                    title: "어둠의 사자 데블몬!"
                },
                {
                    number: 9,
                    title: "얼음 디지몬과의 싸움!"
                },
                {
                    number: 10,
                    title: "수호자, 켄터스몬!"
                },
                {
                    number: 11,
                    title: "고스몬의 유령 축제!"
                },
                {
                    number: 12,
                    title: "리키와 파닥몬의 모험"
                },
                {
                    number: 13,
                    title: "빛의 천사 엔젤몬!"
                },
                {
                    number: 14,
                    title: "신대륙으로 출발!"
                },
                {
                    number: 15,
                    title: "새로운 적 에테몬!"
                },
                {
                    number: 16,
                    title: "암흑 진화, 스컬그레이몬!"
                },
                {
                    number: 17,
                    title: "사막의 선장 꼬끼몬"
                },
                {
                    number: 18,
                    title: "꼬마요정 피콜몬"
                },
                {
                    number: 19,
                    title: "미궁속의 데이터몬"
                },
                {
                    number: 20,
                    title: "완전진화, 메탈그레이몬!"
                },
                {
                    number: 21,
                    title: "현실 세계로 돌아온 태일"
                },
                {
                    number: 22,
                    title: "작은 악마, 피코데블몬"
                },
                {
                    number: 23,
                    title: "우정의 진화, 워가루몬!"
                },
                {
                    number: 24,
                    title: "격파! 아트라캅테리몬!"
                },
                {
                    number: 25,
                    title: "잠자는 폭군, 왕개굴몬!"
                },
                {
                    number: 26,
                    title: "빛나는 날개, 가루다몬!"
                },
                {
                    number: 27,
                    title: "어둠의 성으로"
                },
                {
                    number: 28,
                    title: "현실 세계로 가는 문"
                },
                {
                    number: 29,
                    title: "빛의 언덕에 나타난 맘몬"
                },
                {
                    number: 30,
                    title: "여의도로 가는 길"
                },
                {
                    number: 31,
                    title: "인천 부두의 레어몬"
                },
                {
                    number: 32,
                    title: "화염악당, 데드메라몬"
                },
                {
                    number: 33,
                    title: "펌프몬과 울퉁몬"
                },
                {
                    number: 34,
                    title: "운명의 친구, 가트몬!"
                },
                {
                    number: 35,
                    title: "꽃의 요정 릴리몬!"
                },
                {
                    number: 36,
                    title: "결계 돌파! 쥬드몬"
                },
                {
                    number: 37,
                    title: "화려한 변신! 엔젤우몬!"
                },
                {
                    number: 38,
                    title: "부활! 마왕 베놈묘티스몬"
                },
                {
                    number: 39,
                    title: "최강진화! 어둠을 물리쳐라!"
                },
                {
                    number: 40,
                    title: "어둠의 사천왕 등장!"
                },
                {
                    number: 41,
                    title: "바다의 왕, 메탈시드라몬!"
                },
                {
                    number: 42,
                    title: "숨막히는 추적, 고래몬"
                },
                {
                    number: 43,
                    title: "위험한 장난, 피노키몬"
                },
                {
                    number: 44,
                    title: "갈라진 우정, 쥬레이몬"
                },
                {
                    number: 45,
                    title: "밝혀진 진실!"
                },
                {
                    number: 46,
                    title: "메탈에테몬의 부활"
                },
                {
                    number: 47,
                    title: "황금 용사, 샤벨레오몬!"
                },
                {
                    number: 48,
                    title: "폭파 지령, 파워드라몬!"
                },
                {
                    number: 49,
                    title: "워매몬 구출작전!"
                },
                {
                    number: 50,
                    title: "어둠의 꽃, 레이디데블몬"
                },
                {
                    number: 51,
                    title: "지옥의 사자, 피에몬"
                },
                {
                    number: 52,
                    title: "성검사, 홀리엔젤몬!"
                },
                {
                    number: 53,
                    title: "최후의 적, 아포카리몬"
                },
                {
                    number: 54,
                    title: "새로운 세계"
                }
            ]
        })
    )
    res.end()
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

