import { Container, Divider, Grid } from "@mui/material"
import MainBar from "../components/home_page/MainBar";
import UserCommentItem from '../components/home_page/UserCommentItem';
import AdvantageItem from "../components/home_page/AdvantageItem";
import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import TranslateIcon from '@mui/icons-material/Translate';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ImageIcon from '@mui/icons-material/Image';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ForumIcon from '@mui/icons-material/Forum';
import SchoolIcon from '@mui/icons-material/School';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import RefreshIcon from '@mui/icons-material/Refresh';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { styled } from "@mui/system";

const HomePageHeader = styled('div')({
    paddingTop: 35,
    paddingBottom: 35
})

const MiddlePageWrapper = styled('div')({
    paddingTop: 35,
    paddingBottom: 35
})

const AdvantagesWrapper = styled('div')({
    paddingTop: 35,
    paddingBottom: 35
})

const HomePage = () => {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <HomePageHeader>
                <MainBar />
            </HomePageHeader>
            <Divider />
            <MiddlePageWrapper>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={4}><UserCommentItem header={"Fiszkoteka to przełom w nauce słownictwa w naszych szkołach!"} author={"Marcin Majer"} avatar={"https://mui.com/static/images/avatar/1.jpg"} /> </Grid>
                    <Grid item xs={6} md={4}><UserCommentItem header={"Wcześniej nie znosiłam się uczyć, dzisiaj to moje hobby:)"} author={"Monika Grobelna"} avatar={"https://mui.com/static/images/avatar/2.jpg"} /> </Grid>
                    <Grid item xs={6} md={4}><UserCommentItem header={"Fiszkoteka to Złota Strona Roku tygodnika WPROST"} author={""} avatar={"https://www.focus.pl/media/cache/default_view/uploads/media/default/0001/04/1a7b44aef15bf9b6af2db8b38ff0f538cf147d24.jpeg"} /> </Grid>

                    <Grid item xs={6} md={4}><UserCommentItem header={"Też jej używam. Fiszki nauczyły mnie hiszpańskiego:)"} author={"Marcin Młodzki"} avatar={"https://mui.com/static/images/avatar/4.jpg"} /> </Grid>
                    <Grid item xs={6} md={4}><UserCommentItem header={"One of the best online learning tools on the market."} author={"prof. Ewa Lajer-Burcharth"} avatar={"https://mui.com/static/images/avatar/3.jpg"} /> </Grid>
                    <Grid item xs={6} md={4}><UserCommentItem header={"Komisja Europejska przyznała Fiszkotece prestiżowy certyfikat European Language Label"} author={""} avatar={"https://powietrze.malopolska.pl/wp-content/uploads/2016/07/european_commission.png"} /> </Grid>
                </Grid>
            </MiddlePageWrapper>
            <Divider />
            <AdvantagesWrapper>
                <Grid container spacing={12} rowSpacing={12}>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"62 milionów fiszek"} avatar={<StorageIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"2 500 000 użytkowników"} avatar={<PeopleIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"24 języki"} avatar={<TranslateIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"wymowa dla słuchowców"} avatar={<VolumeUpIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"obrazki dla wzrokowców"} avatar={<ImageIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"klawiatura dla kinestetyków"} avatar={<KeyboardIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"śledź swoje postępy"} avatar={<QueryStatsIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"przykłady"} avatar={<ForumIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"kursy współtworzone z UW"} avatar={<SchoolIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"przypominacz"} avatar={<NotificationsActiveIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"optymalne powtórki"} avatar={<RefreshIcon />} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AdvantageItem header={"zawsze przy Tobie"} avatar={<PhoneAndroidIcon />} />
                    </Grid>
                </Grid>
            </AdvantagesWrapper>
        </Container>
    )
}

export default HomePage;