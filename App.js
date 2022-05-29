import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './src/components/styles';
import axios from 'axios';

let api_key = "&api_key=a99acd14788dbc4183c3480c39b2f6d3";
let base_url="http://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+api_key;
let baseImgUrl = "http://image.tmdb.org/t/p/w500";
let baseSearchUrl = base_url + "/search/movie?api_key=a99acd14788dbc4183c3480c39b2f6d3&language=en-US&page=1&include_adult=false&query=";

export default function App() {

  const [state, setState] = useState({
    query: "",
    resultsSearch: [],
    selected: {}
  });

    //puxa dados da pi
    const search = () => {
      axios(baseSearchUrl + state.query).then(({ data }) => {
        let resultsSearch = data.results
        setState(prevState => {
          return { ...prevState, resultsSearch: resultsSearch }
        })
      })
    }
  
  return (
    <View style={styles.container}>
      <View>
          <TextInput //entrada de texto (search)
            style={styles.searchBox}
            underlineColorAndroid="transparent"
            placeholder='Pesquisar'
            placeholderTextColor={'#7B8794'}
            onChangeText={text => setState(prevState => {
              return{...prevState, query: text} //ao clicar no box de pesquisa, conseguimos deletar o texto padrão e digitar 
            })}
            onSubmitEditing={search}
            value={state.query} //texto background igual ao state.s
          />
        </View>

      <ScrollView>
        {state.resultsSearch.map(result => ( //puxa filme pesquisado
          <View key = {result.id}>
            <Image 
              source={{ uri : baseImgUrl + result.poster_path }}
              style={{
                width: 300,
                height: 300
              }}
              resizeMode = "cover"
            />
            <Text>{result.title} {result.vote_average}</Text>
            <Text>{result.overview}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
