import React, {useState} from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Platform  } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import Text from "../components/Text";

export default SignScreen = ({navigation}) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const getPermission = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status != "granted") {
                alert("Precisamos de permissão para acessar suas fotos");
            }
        }
    }
    return (
        <Container>
            <Main>
                <Text tittle semi ceenter> 
                Entre para começar / Crie sua conta </Text>
            </Main>

            <ProfilePhotoContainer onPress={addProfilePhoto}>

                <DefaultProfilePhoto>
                    <AntDesign name="plus" size={24} color="#ffffff" />
                </DefaultProfilePhoto>

            </ProfilePhotoContainer>


            <Auth>
            <AuthContainer>  
                <AuthTitle>Digite seu nome</AuthTitle>
                <AuthField 
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    autoFocus={true}
                    onChangeText={(nome) => setEmail(nome.trim())}
                    value={nome}
                />
                </AuthContainer>

               <AuthContainer>  
                <AuthTitle>Digite seu Email</AuthTitle>
                <AuthField 
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    autoFocus={true}
                    keyboardType="email"
                    onChangeText={(email) => setEmail(email.trim())}
                    value={email}
                />
                </AuthContainer>

                <AuthContainer>  
                <AuthTitle>Crie sua Senha</AuthTitle>
                <AuthField 
                    autoCapitalize="none"
                    autoCompleteType="senha"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password.trim())}
                    value={password}
                />
                </AuthContainer>
            </Auth>

            <SignUpContainer disabled={loading}>
                {loading ? ( 
                    <Loading /> 
                    ) : ( 
                    <Text bold center color="#ffffff">
                        
                        Criar
                    
                    </Text> 
                )}
              
            </SignUpContainer>

            <SignIn onPress={() => navigation.navigate("SignIn")}>
                <Text small center>
                    Ja tem conta criada?{""} 
                    <Text bold color="#8022d9">
                        Registre-se
                    </Text>
                </Text>
            </SignIn>
            <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
            </HeaderGraphic>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 160px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
    background-color: #e1e2e6;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    align-self: center;
    margin-top: 16px;
    overflow: hidden;

`;

const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;

`;

const Auth = styled.View`
    margin: 16px 32px 32px;
`;  

const AuthContainer = styled.View`
    margin-bottom: 32px;

`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 50px;
    font-size: 15px;
`;

const SignUpContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: "#ffffff",
    size: "small",
}))``;

const SignIn = styled.TouchableOpacity`
    margin-top: 16px;
`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
    background-color: #227bd9;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #150524;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

const StatusBar = styled.StatusBar``;