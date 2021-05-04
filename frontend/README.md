# Algumas informaçoes interessantes :

 useMemo() observa o valor de uma variavel e muda outra quando essa variavel muda
 ```
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  } ,[thumbnail]);
```

para mandar dados com Multipart Form (que permite imagens), se usa:
```
async function handleSubmit(){
    const data = new FormData();
    
    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    const response = await api.post('/spots', data )
  }
```

para redirecionar para alguma pagina, usamos:
```
  export default function New({ history }){
    history.push('/rota');
  }
```
