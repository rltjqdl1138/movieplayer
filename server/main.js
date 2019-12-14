const tempList =  [
    {
        videoID: "01",
        videoNumber: 1,
        videoTitle: "모험의 섬"
    },
    {
        videoID: "02",
        videoNumber: 2,
        videoTitle: "놀라운 진화 그레이몬!"
    },
    {

        videoID: "03",
        videoNumber: 3,
        videoTitle: "푸른 늑대 가루몬!"
    },
    {
        videoID: "04",
        videoNumber: 4,
        videoTitle: "불사조 버드라몬!"
    },
    {
        videoID: "05",
        videoNumber: 5,
        videoTitle: "번개 용사 캅테리몬!"
    },
    {
        videoID: "06",
        videoNumber: 6,
        videoTitle: "시드몬의 분노!"
    },
    {
        videoID: "07",
        videoNumber: 7,
        videoTitle: "원뿔몬의 포효!"
    },
    {
        videoID: "08",
        videoNumber: 8,
        videoTitle: "어둠의 사자 데블몬!"
    },
    {
        videoID: "09",
        videoNumber: 9,
        videoTitle: "얼음 디지몬과의 싸움!"
    },
    {
        videoID: "10",
        videoNumber: 10,
        videoTitle: "수호자, 켄터스몬!"
    },
    {
        videoID: "11",
        videoNumber: 11,
        videoTitle: "고스몬의 유령 축제!"
    },
    {
        videoID: "12",
        videoNumber: 12,
        videoTitle: "리키와 파닥몬의 모험"
    },
    {
        videoID: "13",
        videoNumber: 13,
        videoTitle: "빛의 천사 엔젤몬!"
    },
    {
        videoID: "14",
        videoNumber: 14,
        videoTitle: "신대륙으로 출발!"
    },
    {
        videoID: "15",
        videoNumber: 15,
        videoTitle: "새로운 적 에테몬!"
    },
    {
        videoID: "16",
        videoNumber: 16,
        videoTitle: "암흑 진화, 스컬그레이몬!"
    },
    {
        videoID: "17",
        videoNumber: 17,
        videoTitle: "사막의 선장 꼬끼몬"
    },
    {
        videoID: "18",
        videoNumber: 18,
        videoTitle: "꼬마요정 피콜몬"
    },
    {
        videoID: "19",
        videoNumber: 19,
        videoTitle: "미궁속의 데이터몬"
    },
    {
        videoID: "20",
        videoNumber: 20,
        videoTitle: "완전진화, 메탈그레이몬!"
    },
    {
        videoID: "21",
        videoNumber: 21,
        videoTitle: "현실 세계로 돌아온 태일"
    },
    {
        videoID: "22",
        videoNumber: 22,
        videoTitle: "작은 악마, 피코데블몬"
    },
    {
        videoID: "23",
        videoNumber: 23,
        videoTitle: "우정의 진화, 워가루몬!"
    },
    {
        videoID: "24",
        videoNumber: 24,
        videoTitle: "격파! 아트라캅테리몬!"
    },
    {
        videoID: "25",
        videoNumber: 25,
        videoTitle: "잠자는 폭군, 왕개굴몬!"
    },
    {
        videoID: "26",
        videoNumber: 26,
        videoTitle: "빛나는 날개, 가루다몬!"
    },
    {
        videoID: "27",
        videoNumber: 27,
        videoTitle: "어둠의 성으로"
    },
    {
        videoID: "28",
        videoNumber: 28,
        videoTitle: "현실 세계로 가는 문"
    },
    {
        videoID: "29",
        videoNumber: 29,
        videoTitle: "빛의 언덕에 나타난 맘몬"
    },
    {
        videoID: "30",
        videoNumber: 30,
        videoTitle: "여의도로 가는 길"
    },
    {
        videoID: "31",
        videoNumber: 31,
        videoTitle: "인천 부두의 레어몬"
    },
    {
        videoID: "32",
        videoNumber: 32,
        videoTitle: "화염악당, 데드메라몬"
    },
    {
        videoID: "33",
        videoNumber: 33,
        videoTitle: "펌프몬과 울퉁몬"
    },
    {
        videoID: "34",
        videoNumber: 34,
        videoTitle: "운명의 친구, 가트몬!"
    },
    {
        videoID: "35",
        videoNumber: 35,
        videoTitle: "꽃의 요정 릴리몬!"
    },
    {
        videoID: "36",
        videoNumber: 36,
        videoTitle: "결계 돌파! 쥬드몬"
    },
    {
        videoID: "37",
        videoNumber: 37,
        videoTitle: "화려한 변신! 엔젤우몬!"
    },
    {
        videoID: "38",
        videoNumber: 38,
        videoTitle: "부활! 마왕 베놈묘티스몬"
    },
    {
        videoID: "39",
        videoNumber: 39,
        videoTitle: "최강진화! 어둠을 물리쳐라!"
    },
    {
        videoID: "40",
        videoNumber: 40,
        videoTitle: "어둠의 사천왕 등장!"
    },
    {
        videoID: "41",
        videoNumber: 41,
        videoTitle: "바다의 왕, 메탈시드라몬!"
    },
    {
        videoID: "42",
        videoNumber: 42,
        videoTitle: "숨막히는 추적, 고래몬"
    },
    {
        videoID: "43",
        videoNumber: 43,
        videoTitle: "위험한 장난, 피노키몬"
    },
    {

        videoID: "44",
        videoNumber: 44,
        videoTitle: "갈라진 우정, 쥬레이몬"
    },
    {
        videoID: "45",
        videoNumber: 45,
        videoTitle: "밝혀진 진실!"
    },
    {
        videoID: "46",
        videoNumber: 46,
        videoTitle: "메탈에테몬의 부활"
    },
    {
        videoID: "47",
        videoNumber: 47,
        videoTitle: "황금 용사, 샤벨레오몬!"
    },
    {
        videoID: "48",
        videoNumber: 48,
        videoTitle: "폭파 지령, 파워드라몬!"
    },
    {
        videoID: "49",
        videoNumber: 49,
        videoTitle: "워매몬 구출작전!"
    },
    {
        videoID: "50",
        videoNumber: 50,
        videoTitle: "어둠의 꽃, 레이디데블몬"
    },
    {
        videoID: "51",
        videoNumber: 51,
        videoTitle: "지옥의 사자, 피에몬"
    },
    {
        videoID: "52",
        videoNumber: 52,
        videoTitle: "성검사, 홀리엔젤몬!"
    },
    {
        videoID: "53",
        videoNumber: 53,
        videoTitle: "최후의 적, 아포카리몬"
    },
    {
        videoID: "54",
        videoNumber: 54,
        videoTitle: "새로운 세계"
    }
]
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
app.get('/api/list/digimonadventure', (req, res) => {
    console.log( 'on sign')
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(
        JSON.stringify({
            movieUrl: 'digimon/adventure',
            movieName: '디지몬 어드벤처',
            videoList: tempList
        })
    )
    res.end()
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

