module.exports = babel => {
  var t = babel.types;
  return {
    name: "s2s-action-builders",
    visitor: {
      Program: {
        enter(path, state) {
          path.traverse({
            ExpressionStatement(path){
              const ExpressionStatementName = path.node.expression.name
              if (ExpressionStatementName.endsWith('Request')) {
                const program = path.find(parent => parent.isProgram())
                program.node.body.push(
                  t.ExpressionStatement(
                    t.identifier(
                      ExpressionStatementName.replace(/Request$/, 'Success')
                    )
                  ),
                  t.ExpressionStatement(
                    t.identifier(
                      ExpressionStatementName.replace(/Request$/, 'Failure')
                    )
                  )
                )
              }
            }
          })
        }
      },
      ExpressionStatement: function(path){
        const actioName = path.node.expression.name
        path.replaceWith(
          t.VariableDeclaration(
            "let",
            [t.VariableDeclarator(
              t.identifier(actioName)
            )]
          )
        )
      }
    }
  }
}
