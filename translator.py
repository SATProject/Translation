import pandas as pd
from googletrans import Translator, LANGUAGES

def translate_text(text, translator):
    translation = translator.translate(text, dest='fa')
    return translation.text

def translate_dataframe_foreach_cell(df):
    translator = Translator()

    columns = df.columns.tolist()
    translated_columns = []
    for column in columns:
        translated_columns.append(translate_text(column, translator))

    df.columns = translated_columns

    for column in df.columns:
        df[column] = df[column].map(lambda x: translate_text(x, translator) if pd.notnull(x) else x)
    return df

def translate_dataframe_for_multiple_cell(df):
    translator = Translator()
    
    columns = '|||'.join(df.columns.tolist())
    translated_columns = translate_text(columns, translator).split('|||')

    df.columns = translated_columns

    for column in df.columns:
        combined_text = '|||'.join(df[column].dropna())
        translated_text = translate_text(combined_text, translator)
        translated_values = translated_text.split('|||')
        df.loc[df[column].notna(), column] = translated_values
    return df

def main():
    df = pd.read_csv('er.csv')

    translated_df = translate_dataframe_for_multiple_cell(df)
    translated_df.to_csv('ep12_fa.csv', index=False)

if __name__ == "__main__":
    main()