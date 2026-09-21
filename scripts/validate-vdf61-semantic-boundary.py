import json, hashlib, pathlib, sys
root=pathlib.Path(__file__).resolve().parents[1]
stable_path=root/'src/domain/vdf/rules.json'
exp_path=root/'experiments/engine-6.1-semantic-boundary/rules.json'
stable_text=stable_path.read_text(encoding='utf-8')
assert hashlib.sha256(stable_text.encode()).hexdigest()=='c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5'
s=json.loads(stable_text); e=json.loads(exp_path.read_text(encoding='utf-8'))
for key in ['track','info_types','negative_blocks','cards','rules','lint','do_not_use','block_schema','element_cap_semantics']:
    assert e[key]==s[key], f'downstream drift: {key}'
assert 'semantic_boundary_layer' in e
c=json.loads((root/'experiments/engine-6.1-semantic-boundary/contract.json').read_text(encoding='utf-8'))
assert c['version']=='6.0' and c['schema']['top_level']==['blocks']
assert 'notes' not in c['schema'].get('block_optional',[])
for case in ['R1_data_bigdata','R2_regression_model_evaluation','R3_scamper_13week_3lesson','R4_scamper_13week_1lesson']:
    d=root/'experiments/engine-6.1-semantic-boundary/regression'/case
    assert (d/'input.md').exists() and (d/'expected.json').exists()
print('PASS: production 6.0 hash preserved')
print('PASS: downstream rule structures unchanged')
print('PASS: public Final JSON contract unchanged')
print('PASS: R1-R4 fixtures present')
