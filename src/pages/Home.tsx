import { Main } from "../components/Main"
import { Row } from "../components/Row"
import { requests } from "../Requests"

export const Home = () => {
    return (
        <div>
            <Main />
            <Row rowId='1' title='Popular' fetchURL={requests.requestPopular}/>
            <Row rowId='2' title='Top Rated' fetchURL={requests.requestTopRated}/>
            <Row rowId='3' title='Up Coming' fetchURL={requests.requestUpComing}/>

        </div>
    )
}


           /* <Row title='Popular' fetchURL={requests.requestPopular}/>
            <Row title='Top Trendind' fetchURL={requests.requestTopTrending}/>
            <Row title='Latest' fetchURL={requests.requestLatest}/>
            <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
*/