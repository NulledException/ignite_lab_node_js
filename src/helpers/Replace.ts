// exporto o tipo como nome de Replace cuja o qual tem como propriedade T e R, o tipo Replace recebe como valor o tipo T omitindo a chave R e logo após o valor de R em uma "concatenação" do mesmo
export type Replace<T, R> = Omit<T, keyof R> & R;
