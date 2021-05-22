import React from "react";
import ReactDOM from "react-dom";
import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell,
    Button,
    Text,
    Title,
    Avatar,
    Gradient,
    SizeType,
    withAdaptivity,
    Card,
    CardScroll,
    Div
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {
    Icon28AdvertisingOutline,
    Icon28BoxHeartOutline,
    Icon28HomeOutline,
    Icon28SchoolOutline,
    Icon28ServicesOutline,
    Icon28TargetOutline,
    Icon28UserOutline
} from "@vkontakte/icons";
import {LikeButton} from "./LikeButton";

const Main = ({ sizeX }) => {
    const { viewWidth } = useAdaptivity();
    return (
        <AppRoot>
            <SplitLayout header={<PanelHeader separator={false} shadow />}>
                <SplitCol spaced={viewWidth > ViewWidth.MOBILE}>
                    <View activePanel="gradient">
                        <Panel id="gradient">
                            <PanelHeader>Nice -_- Team</PanelHeader>
                            <CardScroll size="s">
                                <Card>
                                    <Gradient style={{
                                        margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        padding: 32,
                                    }}>
                                        <Avatar size={128} src="pictures/danila_avatar.jpg"/>
                                        <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Данила Вальковец</Title>
                                        <Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }} weight="regular">Собрал команду. Не знает, что с ней делать :)</Text>
                                        <Div style={{display: 'flex'}}>
                                            <a href="https://vk.com/id236915192">
                                                <Button size="m" style={{marginRight: 10}} mode="primary">VK</Button>
                                            </a>
                                            <a href="https://github.com/NTDV">
                                                <Button size="m" style={{marginRight: 10}} mode="commerce">GitHub</Button>
                                            </a>
                                            <LikeButton/>
                                        </Div>
                                    </Gradient>
                                    <Group mode="plain">
                                        <Header>Личные данные</Header>
                                        <SimpleCell before={<Icon28UserOutline />} description="Коротко о себе" >
                                            Чувствую себя отлично. Как всегда, не выспался :)
                                        </SimpleCell>
                                        <SimpleCell before={<Icon28HomeOutline />} description="Родной город">Воронеж</SimpleCell>
                                        <SimpleCell before={<Icon28SchoolOutline />} description="Бобров">МБОУ ОЦ Лидер им. А. В. Гордеева</SimpleCell>
                                        <SimpleCell before={<Icon28AdvertisingOutline />} description="Готовность к сотурдничеству">Полная</SimpleCell>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Программирование</Header>
                                        <SimpleCell before={<Icon28BoxHeartOutline />} description="Любимая технология">.NET Core (C# WPF)</SimpleCell>
                                        <SimpleCell before={<Icon28ServicesOutline />} description="Опыт разработки">ASP.NET, Java SE 14, React, Arduino</SimpleCell>
                                        <SimpleCell before={<Icon28TargetOutline />} description="Цель увлечения">Облегчение ежедневной жизни окружающим</SimpleCell>
                                    </Group>
                                </Card>
                                <Card>
                                    <Gradient style={{
                                        margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        padding: 32,
                                    }}>
                                        <Avatar size={128} src=""/>
                                        <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Имя Фамилия</Title>
                                        <Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }} weight="regular">Статус</Text>
                                        <Div style={{display: 'flex'}}>
                                            <a href="">
                                                <Button size="m" style={{marginRight: 10}} mode="primary">VK</Button>
                                            </a>
                                            <a href="">
                                                <Button size="m" style={{marginRight: 10}} mode="commerce">GitHub</Button>
                                            </a>
                                            <LikeButton/>
                                        </Div>
                                    </Gradient>
                                    <Group mode="plain">
                                        <Header>Личные данные</Header>
                                        <SimpleCell before={<Icon28UserOutline />} description="Коротко о себе" >
                                            -
                                        </SimpleCell>
                                        <SimpleCell before={<Icon28HomeOutline />} description="Родной город">-</SimpleCell>
                                        <SimpleCell before={<Icon28SchoolOutline />} description="[город школы]">-</SimpleCell>
                                        <SimpleCell before={<Icon28AdvertisingOutline />} description="Готовность к сотурдничеству">-</SimpleCell>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Программирование</Header>
                                        <SimpleCell before={<Icon28BoxHeartOutline />} description="Любимая технология">-</SimpleCell>
                                        <SimpleCell before={<Icon28ServicesOutline />} description="Опыт разработки">-</SimpleCell>
                                        <SimpleCell before={<Icon28TargetOutline />} description="Цель увлечения">-</SimpleCell>
                                    </Group>
                                </Card>
                                <Card>
                                    <Gradient style={{
                                        margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        padding: 32,
                                    }}>
                                        <Avatar size={128} src=""/>
                                        <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Имя Фамилия</Title>
                                        <Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }} weight="regular">Статус</Text>
                                        <Div style={{display: 'flex'}}>
                                            <a href="">
                                                <Button size="m" style={{marginRight: 10}} mode="primary">VK</Button>
                                            </a>
                                            <a href="">
                                                <Button size="m" style={{marginRight: 10}} mode="commerce">GitHub</Button>
                                            </a>
                                            <LikeButton/>
                                        </Div>
                                    </Gradient>
                                    <Group mode="plain">
                                        <Header>Личные данные</Header>
                                        <SimpleCell before={<Icon28UserOutline />} description="Коротко о себе" >
                                            -
                                        </SimpleCell>
                                        <SimpleCell before={<Icon28HomeOutline />} description="Родной город">-</SimpleCell>
                                        <SimpleCell before={<Icon28SchoolOutline />} description="[город школы]">-</SimpleCell>
                                        <SimpleCell before={<Icon28AdvertisingOutline />} description="Готовность к сотурдничеству">-</SimpleCell>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Программирование</Header>
                                        <SimpleCell before={<Icon28BoxHeartOutline />} description="Любимая технология">-</SimpleCell>
                                        <SimpleCell before={<Icon28ServicesOutline />} description="Опыт разработки">-</SimpleCell>
                                        <SimpleCell before={<Icon28TargetOutline />} description="Цель увлечения">-</SimpleCell>
                                    </Group>
                                </Card>
                                <Card>
                                    <Gradient style={{
                                        margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        padding: 32,
                                    }}>
                                        <Avatar size={128} src=""/>
                                        <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Имя Фамилия</Title>
                                        <Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }} weight="regular">Статус</Text>
                                        <Div style={{display: 'flex'}}>
                                            <a href="">
                                                <Button size="m" style={{marginRight: 10}} mode="primary">VK</Button>
                                            </a>
                                            <a href="">
                                                <Button size="m" style={{marginRight: 10}} mode="commerce">GitHub</Button>
                                            </a>
                                            <LikeButton/>
                                        </Div>
                                    </Gradient>
                                    <Group mode="plain">
                                        <Header>Личные данные</Header>
                                        <SimpleCell before={<Icon28UserOutline />} description="Коротко о себе" >
                                            -
                                        </SimpleCell>
                                        <SimpleCell before={<Icon28HomeOutline />} description="Родной город">-</SimpleCell>
                                        <SimpleCell before={<Icon28SchoolOutline />} description="[город школы]">-</SimpleCell>
                                        <SimpleCell before={<Icon28AdvertisingOutline />} description="Готовность к сотурдничеству">-</SimpleCell>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Программирование</Header>
                                        <SimpleCell before={<Icon28BoxHeartOutline />} description="Любимая технология">-</SimpleCell>
                                        <SimpleCell before={<Icon28ServicesOutline />} description="Опыт разработки">-</SimpleCell>
                                        <SimpleCell before={<Icon28TargetOutline />} description="Цель увлечения">-</SimpleCell>
                                    </Group>
                                </Card>
                            </CardScroll>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

const MainWithAdaptivity = withAdaptivity(Main, { sizeX: true });

ReactDOM.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <MainWithAdaptivity />
        </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById("root")
);
