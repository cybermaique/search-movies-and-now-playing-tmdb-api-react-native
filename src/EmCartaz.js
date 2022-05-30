import { useEffect, useState } from 'react';
import { Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './components/styles';
import axios from 'axios';

let language = "&language=en-US"
let api_key = "api_key=a99acd14788dbc4183c3480c39b2f6d3";
let baseUrl="http://api.themoviedb.org/3";
let baseImgUrl = "http://image.tmdb.org/t/p/w500";
let baseSearchUrl = baseUrl + "/search/movie?" + api_key + language + "&page=1&include_adult=false&query=";
let nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=a99acd14788dbc4183c3480c39b2f6d3&REGION=BRASIL&language=pt-BR"

export default function EmCartaz() {

  const [state, setState] = useState({
    results: [],
  });

    //puxa dados da pi
    const Filmes = () => {
      axios(nowPlayingUrl).then(({ data }) => {
        let results = data.results
        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }

    useEffect(() => {
        Filmes()
    }, [])

    return (
        <ScrollView>
        {state.results.map(result => ( //puxa filme pesquisado
          <View key = {result.id}>
            <Image 
              source={{ uri : baseImgUrl + result.poster_path }}
              style={{
                width: 300,
                height: 300
              }}
              resizeMode = "cover"
            />
            <Text>{result.title} {result.vote_average} {result.release_date}</Text>
            <Text>{result.overview}</Text>
          </View>
        ))}
      </ScrollView>
    )
}