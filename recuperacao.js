// QUESTÃO 1

// A) coloca a ação na rota
// B) usar os verbos HTTP
// C) 
// app.post('/users', (req, res) => { 
//         const newUser = { id: users.length + 1, ...req.body }; 
//            users.push(newUser); 
//            res.status(201).json(newUser); 
//        }); 
//          
//        app.get('/users', (req, res) => { 
//            res.status(200).json(users); 
// }); 
    
//QUESTÃO 2
// A) Não adiona os status HTTP
// B)
// app.delete('/users/:id', (req, res) => { 
//   const id = parseInt(req.params.id); 
//    const userIndex = users.findIndex(user => user.id === id); 
//    if (userIndex !== -1) { 
//        users.splice(userIndex, 1); 
//        res.status(200).json({ message: 'Usuário excluído' }); 
//    } else { 
//        res.status(404).json({ message: 'Usuário não encontrado' }); 
//    } 
// }); 

//QUESTÃO 3
// A) PUT atualiza todo o recurso e PATCH apenas parcialmente
// B) 
// app.patch('/users/:id', (req, res) => { 
//     const id = parseInt(req.params.id); 
//     const user = users.find(user => user.id === id); 
  
//     if (user) { 
//       if (req.body.name) {
//         user.name = req.body.name; 
//       }
//       if (req.body.email) {
//         user.email = req.body.email; 
//       }
  
//       res.status(200).json(user); 
//     } else { 
//       res.status(404).json({ message: 'Usuário não encontrado' }); 
//     } 
// });

// QUESTÃO 4
// A) permite que um cliente interaja com uma API através de links hipermídia
// B)
// function generateItemLinks(users) {
//     return {
//         self: { href: `/users/${users.id}` },
//         update: { href: `/users/${users.id}`, method: 'PUT' },
//         delete: { href: `/users/${users.id}`, method: 'DELETE' },
//         patch: { href: `/users/${users.id}`, method: 'PATCH' },
//     };
// }

// app.get('/users/:id', (req, res) => { 
//     const id = parseInt(req.params.id); 
//     const user = users.find(user => user.id === id); 
//     if (user) { 
//         res.status(200).json({
//             ...users,
//             links: generateItemLinks(users),
//         }); 
//     } else { 
//         res.status(404).json({ message: 'Usuário não encontrado' }); 
//     } 
// }); 
   
// QUESTÃO 5
// A) não verifica se o id é valido
// B)
// app.get('/users/:id', (req, res) => { 
//    const id = req.params.id; 

//      if (isNaN(id)) {
//       return res.status(400).json({ message: 'ID inválido' });
//     }

//     const user = users.find(user => user.id === id); 
//     if (user) { 
//         res.status(200).json(user); 
//     } else { 
//         res.status(404).json({ message: 'Usuário não encontrado' }); 
//     } 
// }); 

// QUESTÃO 6
// A) Não valida se ocorrer um erro, e nem se atende os resquisitos basicos
// B)
// app.post('/users', (req, res) => { 
//   const { name } = req.body;
//     if (!name || typeof name !== 'string' || name.length < 3) {
//     return res.status(400).json({ message: 'O campo "name" tem q ser uma string com no minimo 3 caracteres.' });
//   }

//   const newUser = { id: users.length + 1, ...req.body }; 
//   users.push(newUser); 
//   res.status(201).json(newUser); 
// });
    
   