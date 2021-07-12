import click
import json
import datetime

def run(ips, op):
    total_data = {}
    for ip in ips:
        f = open(ip)
        # returns JSON object as 
        # a dictionary
        data = json.load(f)
        for d in data:
            date = datetime.datetime.strptime(d["date"],"%Y-%m-%dT%H:%M:%S.%fZ").strftime('%m/%d/%Y')
            if date not in total_data:
                total_data[date] = 0
            total_data[date] = int(d["killed"]) + total_data[date]
        f.close()
    with open(op, 'w') as f:
        json.dump(total_data, f)


@click.command()
@click.option(
    '--ip',
    required=True,
    help='List of json files',
    multiple=True
)
@click.option(
    '--op',
    required=True,
    help='Name of output json file (exclude .json).'
)
def cli(ip, op):
    run(ip, op)
    for x in ip:
        click.echo(f'Reading file: {x}!')